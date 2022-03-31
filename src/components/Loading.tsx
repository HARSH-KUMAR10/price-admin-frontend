
import React from 'react';
const Loading: React.FunctionComponent<Props> = (props: Props) => {
    return <div className={`d-flex align-items-center flex-column my-5`}>
        <i className="icon-spin6 animate-spin display-4 text-light-grey m-3"></i>
        {props.text}
    </div>
}
export default Loading;

interface Props{
    text?: string
}