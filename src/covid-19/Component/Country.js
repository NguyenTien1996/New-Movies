import React from 'react';
import {Table ,Skeleton } from 'antd';
import MyContext from '../Context/my-context';

const ListCountry = () =>  {
        const columns = [
        {
            title: "STT",
            dataIndex: "key",
            key: "key",
        },
        {
            title: "Quoc gia",
            dataIndex: "Country",
            key: "Country",
        },
        {
            title: "Ma QG",
            dataIndex: "CountryCode",
            key: "CountryCode",
        },
        {
            title: "Moi nhiem",
            dataIndex: "NewConfirmed",
            key: "NewConfirmed",
        },
        {
            title: "Tong ca nhiem",
            dataIndex: "TotalConfirmed",
            key: "TotalConfirmed",
        },
        {
            title: "Tu vong",
            dataIndex: "NewDeaths",
            key: "NewDeaths",
        },
        {
            title: "Tong chet",
            dataIndex: "TotalDeaths",
            key: "TotalDeaths",
        },
        {
            title: "Khoi benh",
            dataIndex: "NewRecovered",
            key: "NewRecovered",
        },
        {
            title: "Tong khoi",
            dataIndex: "TotalRecovered",
            key: "TotalRecovered",
        },
        ];
        return (
            <MyContext.Consumer>
                {context => {
                    console.log(context);
                    if(context.loading || context.virus.Countries === undefined){
                        return(
                            <Skeleton active />
                        )
                    }
                    return(
                        <Table 
                            dataSource={context.virus.Countries} 
                            columns={columns} 
                            rowKey="CountryCode" 
                            pagination={{
                                defaultPageSize:50,
                                showSizeChanger:true,
                                pageSizeOptions:['10','20','30']
                            }}/>
                        )
            }}
            </MyContext.Consumer>
        );
}
export default ListCountry;

