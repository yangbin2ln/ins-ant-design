import BaseFactory from 'src/components/ins/base/BaseFactory';

export default function (Clazz: any) {
    class HocFactory extends BaseFactory {
        static getInit(config: any) {
          return new HocFactory(config);
        }
        constructor(config: any) {
          super(config, Clazz);
        }
      
        getForm() {
          return this.view.getForm();
        }
      
    }
    return HocFactory;
}