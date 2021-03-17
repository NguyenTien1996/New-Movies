import React from 'react';
import {Link} from 'react-router-dom';
import slugify from 'react-slugify';
import {Col, Row, Card} from 'antd';
import PropTypes from 'prop-types';
const { Meta } = Card;

const ListMovieComponent = (props) => {
   return (
     <>
         <Row style={{marginTop:'20px',marginBottom:'20px'}}>
            {props.movie.map((item,index) => (
                <Col span={4} key={index}>
                    <Link to={`/movie/${slugify(item.original_title)}~${item.id}`}>
                        <Card
                            hoverable
                            style={{ width: 200 ,margin: 15}}
                            cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} />}
                        >
                            <Meta title={ item.title} />
                        </Card>
                    </Link>
                </Col>
                )
            )}
        </Row>
     </>
   );
}
ListMovieComponent.propTypes = {
    movie: PropTypes.array.isRequired,
}
export default React.memo(ListMovieComponent);
