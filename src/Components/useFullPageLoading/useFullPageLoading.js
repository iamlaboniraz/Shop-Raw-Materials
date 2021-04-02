import React, { useState } from 'react';

const useFullPageLoading = () => {
    const [loading, setLoading] = useState(false)
    return [
        loading ? <useFullPageLoading /> : null,
        () => setLoading(true), // show loader
        () => setLoading(false) // hide loader
    ];
};

export default useFullPageLoading;