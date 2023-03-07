import GenericSearchInput from "./GenericSearchInput";

function SearchBar({setSearchLengthLower, setSearchLengthHigher, setSearchDifficulty, setSearchAddress, setSearchName, prompt}){
    function handleSearch(){
        console.log("searching")
    }

    return (

    <div>
        <GenericSearchInput setSearchTerm={setSearchName} prompt={"Name"}></GenericSearchInput>
        <GenericSearchInput setSearchTerm={setSearchAddress} prompt={"Address"}></GenericSearchInput>
        <GenericSearchInput setSearchTerm={setSearchDifficulty} prompt={"Difficulty"}></GenericSearchInput>
        <GenericSearchInput setSearchTerm={setSearchLengthLower} prompt={"lower"}></GenericSearchInput>
        <GenericSearchInput setSearchTerm={setSearchLengthHigher} prompt={"higher"}></GenericSearchInput>
    </div>)
}

export default SearchBar;