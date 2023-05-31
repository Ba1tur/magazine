import React from 'react';
import s from "@/components/Form/Form.module.scss";
import Form from "@/components/Form/Form";

const index = () => {
    return (
        <div className={s.container}>
            <div className={s.content}>
                <Form/>
            </div>
        </div>
    );
};

export default index;