import React, { useState, useEffect } from 'react';
import {Row, Col, Card } from 'antd';
import LayoutPage from '../component/Layout';
import {useParams} from 'react-router-dom';
import {getDataMovieByID} from '../service/api';
import LoadingData from '../component/loadingData';
const {Meta} = Card;

const DetailsMoviePage= () => {
    const {id} = useParams();//lay duoc param tu url xuong
    //call api dua vao id bo phim
    const [loadingDetail, setLoadingDetail] = useState(false);
    const [detailsMoviePage, setDetailMovie] = useState({});
    
    useEffect(() => {
        const getData = async() => {
            setLoadingDetail(true);
            const data = await getDataMovieByID(id);
            if(data){
                setDetailMovie(data);
                setLoadingDetail(false)
            }
        }   
        getData();
    }, [id]);
    if(loadingDetail && Object.keys(detailsMoviePage).length === 0 && detailsMoviePage.constructor === Object){
        return(
            <LayoutPage>
                <LoadingData/>
            </LayoutPage>
        )
    }
    return(
        <>
            <LayoutPage>
                <Row style={{marginTop:'20px',marginBottom:'20px'}}>
                    <Col span={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt={detailsMoviePage.title} src={`https://image.tmdb.org/t/p/w300/${detailsMoviePage.poster_path}`} />}
                        >
                            <Meta title={detailsMoviePage.original_title} />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <h1>{detailsMoviePage.title}</h1>
                        <p>{detailsMoviePage.overview}</p>
                        <p>vore average: {detailsMoviePage.vote_average} - vote count: {detailsMoviePage.vote_count}</p>
                    </Col>
                    <Col span={6}>
                        <Row>
                            {detailsMoviePage.images !== undefined ? detailsMoviePage.images.backdrops.map((item, index) => (
                                <Col span={24} key={index}>
                                    <Card
                                        hoverable
                                        bordered={false}
                                        style={{ width: 300 }}
                                        cover={<img alt={detailsMoviePage.title} src={`https://image.tmdb.org/t/p/w300/${item.file_path}`} />}
                                    >
                                    </Card>
                                </Col>
                            )) : null}
                        </Row>
                    </Col>
                </Row>
            </LayoutPage>
        </>
    )
}
export default React.memo(DetailsMoviePage);
