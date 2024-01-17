import Input from "./components/Input";

const Search = ({searchHandler, placeholder, classes}) => {
    const searchTermHandler = (e) => {
        searchHandler(e.target.value)
    }
    return <Input type="search" selectHandler={searchTermHandler} placeholder={placeholder} classes={classes}/>
}

export default Search;