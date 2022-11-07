/*global chrome*/

import React from 'react';
import { Card, Badge } from 'react-bootstrap';

import styled from 'styled-components';

const ResultCard = ({ name, description, url, star, topics }) => {
    return (
        <Card style={{ 
            width: '18rem', 
            color: 'black', 
            fontSize: '1rem', 
            margin: '.5rem' 
        }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">⭐️ {star}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                { topics && 
                    topics.map((topic) => { 
                        return (
                            <BadgeSpan>
                                <Badge pill bg="primary">{topic}</Badge>
                            </BadgeSpan> 
                        );
                    })
                }
                <Card.Text> </Card.Text>
                <a href={url} onClick={() => chrome.tabs.create({ url })}>
                    Repository Link
                </a>
            </Card.Body>
        </Card>
    );
};

export default ResultCard;

const BadgeSpan = styled.span`
    margin: 0 .05rem;
`;