import React, { useState, useEffect } from 'react';
import { InputGroup, Form, Button, Spinner } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

import ResultHeader from '../components/ResultHeader';

import { useGithubSearch } from '../hooks/useGithubSearch';

import styled from 'styled-components';
import ResultCard from '../components/ResultCard';

const Search = () => {
    const [query, setQuery] = useState('github');
    const [input, setInput] = useState('');

    const { data, fetchNextPage, isSuccess, hasNextPage } = useGithubSearch(query);
    const [ref, isView] = useInView();

    useEffect(() => {
        if (isView && hasNextPage) {
            fetchNextPage();
        }
    }, [isView]);

    const handleInput = e => {
        setInput(e.target.value);
    };

    const onSubmit = e => {
        setQuery(input);
    };

    const onKeyPressSubmit = e => {
        if (e.key === 'Enter') {
            setQuery(input);
        }
    };
    
    return (
        <SearchBox>
            <InputGroup className="mb-3" size="sm" style={{ padding: '.5rem' }}>
                <Form.Control
                    value={input}
                    onChange={handleInput}
                    onKeyPress={onKeyPressSubmit}
                    placeholder="Search on Github 🚀"
                    aria-label="검색어"
                    aria-describedby="basic-addon2"
                />
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={onSubmit}
                >
                    검색
                </Button>
            </InputGroup>
            {!isSuccess && <Spinner animation="border" variant="light" /> }
            { isSuccess && data.pages && 
                <div>
                    <ResultHeader total={data.pages[0].result?.total_count} />
                    {data.pages.map((pageData, pageNum) => {
                        const result = pageData.result;
                        
                        return ( 
                            result.items.map((item, idx) => {
                                if (data.pages.length - 1 === pageNum && result.items.length - 1 === idx) {
                                    return (
                                        <div ref={ref} key={item.id}>
                                            <ResultCard 
                                                name={item.full_name} 
                                                description={item.description} 
                                                url={item.html_url} 
                                                star={item.stargazers_count} 
                                                topics={item.topics} 
                                            />
                                        </div>
                                    );
                                } else {
                                    return <ResultCard 
                                        key={item.id}
                                        name={item.full_name} 
                                        description={item.description} 
                                        url={item.html_url} 
                                        star={item.stargazers_count} 
                                        topics={item.topics} 
                                    />
                                }
                            })
                        );
                    })}
                </div>
            }
        </SearchBox>
    );
}

export default Search;

const SearchBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;