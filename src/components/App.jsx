import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import notelist from '../notelist.js'

const App = () =>(
<div><Header/>
{notelist.map((noteItem) => (
    <Note
    key ={noteItem.id}
    title={noteItem.title}
    content={noteItem.content}
    />
    ))}
<Footer/></div>
);

export default App;
