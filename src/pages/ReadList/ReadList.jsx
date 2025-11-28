import React from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import ReadListbook from '../../components/ReadListbook/ReadListbook';

export default function ReadList() {
 
    const data=useLoaderData();

 const getStoreBook=getStoredBook();
 console.log(getStoreBook);
 const getstoreBookDatatoInt = getStoreBook.map((data) => parseInt(data));
 console.log(getstoreBookDatatoInt);
 const myReadlist=data.filter((book)=> getstoreBookDatatoInt.includes(book.bookId) );
 console.log(myReadlist);
 
 
 





  return (
    <section>
<Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
     {
        myReadlist.map((list)=><ReadListbook list={list}> </ReadListbook> )
     }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>



    </section>
  )
}
