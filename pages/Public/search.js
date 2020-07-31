import React from 'react'
import {useState} from 'react'
import './search.less'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
    const [menuisShow, setmenuisShow] = useState(false);
    const [text, setText] = useState("All Filters");
    const [search, setSearch] = useState("");

    const setmenuShow = (e, a) => {
        e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
        setmenuisShow(a);
    };

    const setTexts = (a) => {
        setText(a);
        setmenuisShow(false);
    };

    const setSearchHandle = (e) => {
        setSearch(e.target.value);
    };

    const onsubmitHandle = () => {
        console.log(search);
    };
    return (
        <div className="box-search">
        {/* 菜单搜索 */}
            <div className="nav-menubox">
                <button className="nav-btn" onClick={(e) => setmenuShow(e, true)}>
                    {`${text}`}
                </button>
                <div className={menuisShow ? "nav-show-box nav-show" : "nav-show-box nav-onshow"} >
                    <div onClick={() => setTexts("All Filters")}>All Filters</div>
                    <div onClick={() => setTexts("Asset")}>Asset</div>
                    <div onClick={() => setTexts("Address")}>Address</div>
                    <div onClick={() => setTexts("Transactions")}>Transactions</div>
                </div>
                <input
                    type="text"
                    className="nav-input"
                    placeholder="Search by Address/Tx Hash/Asset"
                    value={`${search}`}
                    onChange={(e) => setSearchHandle(e)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="homebtna"
                    startIcon={<SearchIcon />}
                >
                </Button>
            </div>
        </div>
    )
}