import * as React from 'react';

interface TabPaneProps {order?: string; }

export class Panel extends React.Component<any, any> {
    static TabPane: React.ClassicComponentClass<TabPaneProps>;

    render() {
        let children = this.props.children;
        return (
        <div>
           12 {React.Children.map(children, (child: any) => {
               let a = child.props.order + 10;
               return <div>asdfasd {a}</div>;
           })}
        </div>);
    }
}