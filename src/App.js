import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import * as moment from 'moment';

import TextArea from './components/textarea/TextArea';
import DateRange from './components/daterange/DateRange';
import SearchForm from './components/searchform/SearchForm';
import List from './components/list/List';

import { changeSearchForm } from './redux/searchform/searchform.actions';
import { requestUsers } from './redux/users/users.actions';
import { requestCampaigns } from './redux/campaigns/campaigns.actions';

import { Header } from './styles';
import { unknownUser, dateFormat } from './constants';

const App = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [jsonData, setJsonData] = useState(null);
    const [updateComponent, setUpdateComponent] = useState(false);

    const searchForm = useSelector((state) => state.searchform.searchForm);
    const isPending = useSelector((state) => state.campaigns.isPending);
    const users = useSelector((state) => state.users.users);
    const campaigns = useSelector((state) => state.campaigns.campaigns);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers());
        dispatch(requestCampaigns());
    }, [dispatch]);

    const handleTextArea = (event) => setJsonData(event.target.value);

    const handleSearchForm = (event) => dispatch(changeSearchForm(event.target.value));

    const addCampaigns = () => setUpdateComponent(!updateComponent);

    const data = campaigns.map((item) => Object.assign({}, item, users[item.userId]));

    updateComponent && JSON.parse(jsonData).map((item) => data.push(item));

    let filteredData = data.filter((item) => {
        return moment(item.startDate, dateFormat).toDate() < moment(item.endDate, dateFormat).toDate();
    });

    filteredData = filteredData.filter((item) => {
        if (!item.name) {
            item.name = unknownUser;
        }
        return item.name.toLowerCase().includes(searchForm.toLowerCase());
    });

    if (startDate && endDate) {
        filteredData = filteredData.filter((item) => {
            return (
                (moment(item.startDate, dateFormat).toDate() > startDate._d && moment(item.startDate, dateFormat).toDate() < endDate._d) ||
                (moment(item.endDate, dateFormat).toDate() > startDate._d && moment(item.endDate, dateFormat).toDate() < endDate._d)
            );
        });
    }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <TextArea handleTextArea={handleTextArea} addCampaigns={addCampaigns} jsonData={jsonData} />
            <Header>
                <DateRange startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
                <SearchForm handleSearchForm={handleSearchForm} />
            </Header>
            <List isPending={isPending} data={filteredData} />
        </MuiPickersUtilsProvider>
    );
};

export default App;
