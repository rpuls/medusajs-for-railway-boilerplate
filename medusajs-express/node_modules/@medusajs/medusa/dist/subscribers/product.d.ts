export default ProductSearchSubscriber;
declare class ProductSearchSubscriber {
    constructor({ eventBusService, searchService, productService }: {
        eventBusService: any;
        searchService: any;
        productService: any;
    });
    eventBus_: any;
    searchService_: any;
    productService_: any;
    handleProductCreation: (data: any) => Promise<void>;
    retrieveProduct_: (product_id: any) => Promise<any>;
    handleProductUpdate: (data: any) => Promise<void>;
    handleProductDeletion: (data: any) => Promise<void>;
    handleProductVariantChange: (data: any) => Promise<void>;
}
