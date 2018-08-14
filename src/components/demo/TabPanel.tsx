import * as React from 'react';

interface TabPanelProps { title: string; content: string; order: string; }

class TabPanel extends React.Component<TabPanelProps> {
    render() {
        let {title, content} = this.props;
        return (
            <span> {title}{content} </span>
        );
    }
}

export {TabPanel};