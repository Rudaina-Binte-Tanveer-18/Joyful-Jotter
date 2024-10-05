import "./heading.css";

export default function Headings() {
    return (
        <>
            <div id="heading">
                <h1 className="text-2xl font-bold">TASK MANAGER</h1>
                <h3>Each day is a treasure chest filled with limitless opportunities; take joy in checking many off your list!</h3>
            </div>
            {/* <div id="filter">
                <a href="#main" className="filterButton">All</a>&ensp;&emsp;
                <a href="#category" className="filterButton">Category</a>&ensp;&emsp;
                <a href="#tasks" className="filterButton">Tasks</a>&ensp;&emsp;
                <a href="#time" className="filterButton">Time</a>&ensp;&emsp;
                <a href="#date" className="filterButton">Date</a>
            </div> */}
        </>
    );
}
