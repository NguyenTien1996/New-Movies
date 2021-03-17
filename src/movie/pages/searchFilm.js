import React,{ useState} from 'react';
import {Row, Col, Input, Pagination} from 'antd';
import LayoutPage from '../component/Layout';
import {SearchMovieByKeywords} from '../service/api';
import LoadingData from '../component/loadingData';
import ListMovieView from '../pages/ListMovie';

const { Search } = Input;

const SearchFilmPage= () => {
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItem] = useState(0);
    const [keyword, setKeyword] = useState([]);
    const [listMovies, setListMovies] = useState([]);

    const changeInput = (event) => {
        const val = event.target.value;
        setKeyword(val);
    }
    const searchMovies = async (keywords= '', currentPage = 1) => {
        if(keyword.length > 0){
            setLoadingSearch(true);
            const data = await SearchMovieByKeywords(keywords,currentPage);
            if(data){
                setListMovies(data.results);
                setTotalItem(data.total_results);
                setPage(currentPage);
                setLoadingSearch(false);
                window.scrollTo(0,0)
            }
        }
    }
    if(loadingSearch && listMovies.length === 0){
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
                    <Col span={6} offset={9} style={{textAlign:"center"}}>
                        <h1>This is Search</h1>
                        <Search 
                            placeholder="input search text" 
                            onSearch={(val) => searchMovies(val, page)} 
                            enterButton 
                            onChange={changeInput}
                            value={keyword}
                        />
                    </Col>
                </Row>
                <ListMovieView movie={listMovies}/>
                {listMovies.length > 0 && (
                    <Row style={{marginTop:'20px',marginBottom:'60px',textAlign:'center'}}>
                        <Col span={24}>
                            <Pagination 
                                showQuickJumper
                                current={page} 
                                pageSize={20} 
                                total={totalItems} 
                                onChange={(pages) => searchMovies(keyword,pages)}
                            />
                        </Col>
                    </Row>
                )}
            </LayoutPage>
        </>
    )
}
export default React.memo(SearchFilmPage);
