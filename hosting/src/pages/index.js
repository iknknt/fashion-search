import React from "react";
import page from 'common/page';
import Hello from 'components/Hello';
import HelloState from 'components/HelloState';
import { withTheme } from '@material-ui/styles';


const Sample = ({ message }) => {
  return (<p>{message}</p>);
};

const Page = ({ theme }) => {

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <h1>Sample Firebase Project</h1>
        <Sample message='sample' />
        <Hello><span>Hello</span></Hello>
        <HelloState title='Count up sample' />
      </main>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
