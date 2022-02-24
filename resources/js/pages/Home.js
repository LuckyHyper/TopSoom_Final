import  React from 'react';
import Nav from '../components/navbar/Nav';
import Main from '../components/main/Main';
import Search from '../components/search-bar/Search';
import ScanButton from '../components/scan-button/ScanButton';

export default function Home(){
    return(
        <div>
            <Nav />
            <Search />
            <ScanButton />
            <Main />
        </div>
    );
}