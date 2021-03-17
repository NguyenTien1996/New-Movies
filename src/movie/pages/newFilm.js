import React,{useState, useEffect} from 'react';
import {Row, Col, Pagination} from 'antd';
import LayoutPage from '../component/Layout';
import LoadingData from '../component/loadingData';
import {getDataNew} from '../service/api';
import ListMovieView from '../pages/ListMovie';

const NewFilmPage= () => {
    const [loadingHome,setLoadingHome] = useState(false);
    const [movie, setMovie] = useState([]);
    const [totalItems, setTotalItems] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () =>{
            setLoadingHome(true);
            const data = await getDataNew(page);
            if(data){
                setMovie(data.results);
                setTotalItems(data.total_results);
                
                //gioi han page
               
                if(page<1){
                    setPage(1);
                } 
                else if(page > data.total_pages){
                    setPage(data.total_pages);
                }

                setLoadingHome(false);
            } 
        }
        getData();//goi ham ra su dung
    }, [page]);

    if(loadingHome || movie.length === 0 ){
        return(
            <LayoutPage>
                <LoadingData/>
            </LayoutPage>
        )
    }
    
    const changePage = (pages) => {
        setPage(pages);
    }
    return(
        <>
            <LayoutPage>
            <ListMovieView movie={movie}/>
                <Row style={{marginTop:'20px',marginBottom:'60px',textAlign:'center'}}>
                    <Col span={24}>
                        <Pagination 
                            showQuickJumper
                            defaultCurrent={page} 
                            pageSize={20} 
                            total={totalItems} 
                            onChange={(pages) => changePage(pages)}
                        />
                    </Col>
                </Row>
            </LayoutPage>
        </>
    )
}
export default React.memo(NewFilmPage);
