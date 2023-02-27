import { useState } from "react";

const initialDetail = {
    card: [],
}

const useInitialDetail = () => {
    const [cardState , setCardState ] = useState(initialDetail);

    const addToCardState = (payload) =>{
        setCardState({
            card: [ payload]
        });
    }

    return {
        cardState ,
        addToCardState
    }
}

export default useInitialDetail;