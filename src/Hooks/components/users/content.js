import React, {useState, useEffect} from 'react';
import {Row, Col, Card , Skeleton, Button,Pagination } from 'antd';
import {api} from '../../service/api';

const { Meta } = Card;

const ListUser = (props) => {
    const [loading,setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    const [users, setListUsers] = useState([]);
    const [previous, showPrevious] = useState(false);
    const [next, showNext] = useState(false);

    useEffect(() => {
        //viet 1ham de lay du lieu tuw api ve
        const getData = async () => {
            setLoading (true);//bao hieu bat dau call api lay du lieu
            const dataUsers = await api.getListDataUser(page);
            if(dataUsers){
                //cap nhat laij dataUsers
                setListUsers(dataUsers.data);
                //cap nat totaItem
                setTotalItem(dataUsers.total);
                //cap nhat totalPAge
                setTotalPage(dataUsers.total_pages);
                //cap nhat lai loading
                setLoading(false);
                //xu ly phan trang
                //gioi han page
                if(page < 1){
                    setPage(1);
                }else if(page > dataUsers.total_pages){
                    setPage(dataUsers.total_pages);
                }
                //kiem tra hien thi nut previous
                if(page > 1){
                    showPrevious(true);
                }
                else{
                    showPrevious(false);
                }
                //kiem tra hien thi nut next
                if(page < dataUsers.total_pages){
                    showNext(true);
                }
                else{
                    showNext(false);
                }
            }
        }
        getData();//goi ham ra su dung
    }, [page]);//am chi su dung giong nhu componentDidMount ben class component or nhu componentDidUpdate class component

    //viet hamchuyen trang 
    const previousAndNextPage = (type) => {
        //type de biet duwoc dang bam vao next hay previous
        if(type === 'previous'){
            //cap nhat giam state page xuong 1
            if(page > 1){
                setPage(page - 1);
            }
        }else if(type === 'next'){
            if(page < totalPage){
                setPage(page + 1);
            }
        }
    }
    const changePage = (pages) => {
        setPage(pages);
    }
    if(loading || users.length ===0){
        return (<Skeleton active/>);
    }

   return (
     <>
        <Row style={{marginTop:'20px',marginBottom:'20px'}}>
            {users.map((item,index)=> (
                <Col span={8} key={index}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={item.last_name} src={item.avatar} />}
                    >
                        <Meta title="item.first_name" description={item.email} />
                    </Card>
                </Col>
            ))}
        </Row>
        <Row style={{marginTop:'20px',marginBottom:'60px',textAlign:'center'}}>
            <Col span={12} offset={6}>
                {previous && (<Button type="primary" onClick={() => previousAndNextPage('previous')}>Previous</Button>)}
                {next && (<Button type="primary" style={{marginLeft:'20px'}} onClick={() => previousAndNextPage('next')}>Next</Button>)}
            </Col>
        </Row>
        <Row style={{marginTop:'20px',marginBottom:'60px',textAlign:'center'}}>
            <Col span={24}>
                <Pagination 
                    defaultCurrent={page} 
                    pageSize={3} total={totalItem} 
                    onChange={(pages) => changePage(pages)}
                />
            </Col>
        </Row>
     </>
   );
}
export default React.memo(ListUser);