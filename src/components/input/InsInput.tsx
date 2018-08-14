import { Input } from 'antd';
import * as React from 'react';

const Search = Input.Search;

export class InsInput extends React.Component {
    render() {
        const suffix = (<span>sadfasdf_suffix</span>);
        const inputStyle = {
            paddingRight: 100,
            fontSize: 50
        };

        return (
            <div>
                <Search style={inputStyle} className={'aaa'}
      placeholder="input search text"
      onSearch={value => console.log(value)}
      suffix={suffix}
    />
            </div>
        );
    }
}