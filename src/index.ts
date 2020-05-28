export interface RDXWebPackConfigOptions {
    absoluteContextPath: string,
    absoluteEntryPaths: string[]
}

export default class RDXWebPackConfig {
    options: RDXWebPackConfigOptions;

    constructor(options: RDXWebPackConfigOptions) {
        this.options = options;
    }
}
