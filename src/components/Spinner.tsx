'use client';

import { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "100px auto",
}

const Spinner = ({loading}:{loading: boolean}) => {
    return (
        <ClipLoader
            loading={loading}
            size={150}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default Spinner;