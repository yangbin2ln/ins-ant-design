import * as React from 'react';
class BaseFactory {
    /*组件类*/
    public ReactCom: any;
    /*组件实例*/
    public view: any;
    private config: any;
    private Clazz: any;
  
    constructor(config: any, Clazz: any) {
      this.config = config;
      this.Clazz = Clazz;
      this.getReactCom();
    }
  
    getReactCom() {
        var me = this;
        class HocRectCom extends React.Component {
            render() {
                const props = {
                    config: me.config,
                    hoc: me
                };
                return (<me.Clazz {...props}/>);
            }
        }
        this.ReactCom = HocRectCom;
        return HocRectCom;
    }
}

export default BaseFactory;