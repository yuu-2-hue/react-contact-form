
type PaginationProps = {
    currentPage: number;
    lastPage: number;
    onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, lastPage, onPageChange, }: PaginationProps) => {

    const buttonStyle = {
        backgroundColor: "none",
        border: "none",
        outline: "none",
        cursor: "pointer",
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <button style={buttonStyle} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <img src="leftArrow.png" alt="" />
            </button>
            <span style={{ margin: "0 1rem" }}>
                {currentPage} / {lastPage}
            </span>
            <button style={buttonStyle} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === lastPage}>
                <img src="rightArrow.png" alt="" />
            </button>
        </div>
    );
};
