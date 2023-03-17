import React, { useState } from 'react';

import jsonplaceholder from './apis/jsonplaceholder';
import Button from './components/Button';
import Resources from './components/Resources';

const App = () => {
    const [resources, setResources ] = useState([]);

    const getPosts=async() =>{
        try{
            const posts = await jsonplaceholder.get('/posts');
            setResources(posts.data);
        }catch (err) {
            console.log(err)
        }
    };

    const getAlbumns =async() =>{
        try{
            const Albumns = await jsonplaceholder.get('/albums');
            setResources(albums.data);
        }catch (err) {
            console.log(err)
        }
    };

    return (
        <div className='ui container' style={{marginTop: '30px'}}>
            <p>
                App
            </p>
        </div>
    )
}

export default App;