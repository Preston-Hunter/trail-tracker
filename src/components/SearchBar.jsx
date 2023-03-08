import GenericSearchInput from "./GenericSearchInput";

function SearchBar({setSearchLengthLower, setSearchLengthHigher, setSearchDifficulty, setSearchAddress, setSearchName}){
    function handleSearch(){
        console.log("searching")
    }

    return (

    <div>
        <GenericSearchInput setSearchTerm={setSearchName} prompt={"Name"} defaultValue={""}></GenericSearchInput>
        <GenericSearchInput setSearchTerm={setSearchAddress} prompt={"Address"} defaultValue={""}></GenericSearchInput>
        <GenericSearchInput setSearchTerm={setSearchDifficulty} prompt={"Difficulty"} defaultValue={""}></GenericSearchInput>
        <GenericSearchInput setSearchTerm={setSearchLengthLower} prompt={"lower"} defaultValue={0}></GenericSearchInput>
        <GenericSearchInput setSearchTerm={setSearchLengthHigher} prompt={"higher"} defaultValue={Infinity}></GenericSearchInput>
    </div>)
}

export default SearchBar;