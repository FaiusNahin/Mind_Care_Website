import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Detail from '../Detail/Detail';
import useServices from './../../../hooks/useServices';

const Details = () => {
    const { detailId } = useParams();
    const [services] = useServices();

    const details = services.filter(dt => dt.id === parseInt(detailId));

    return (
        <Container>
            <Row lg={2} md={1} sm={1} className="my-5">
                {
                    details.map(detail => <Detail
                        key={detail.id}
                        detail={detail}
                    ></Detail>)
                }
            </Row>
        </Container>
    );
};

export default Details;