import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,Selection, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject,Search,Toolbar } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';


const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        
        dataSource={customersData}
        allowPaging={true}
        allowSorting={true}
        editSettings={{allowEditing:true,allowDeleting:true}}
        toolbar={['Search','Delete','Edit']}
        width='auto'
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[ Page,Search, Toolbar,Selection,Edit,Sort,Filter]} />
      </GridComponent>
    </div>
  )
}

export default Customers