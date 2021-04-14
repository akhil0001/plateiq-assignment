import React from 'react';
import { getVendorData } from '../../api';
import { VendorInfo } from '../../components/vendor-info';

export class VendorInfoContainer extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            data: null
        }
    }

    async componentDidMount() {
        const data = await getVendorData();
        this.refineData(data);
    }

    refineData = (data) => {
        const {name,data:vendorData,isMapped} = data;
        this.setState({
            name,
            data: vendorData,
            isMapped: isMapped
        })
    }

     render() {
        return (
            <VendorInfo name={this.state.name} isMapped={this.state.isMapped} data={this.state.data} />
        )
    }
}