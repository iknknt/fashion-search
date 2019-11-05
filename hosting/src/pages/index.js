import React from "react";
import page from 'common/page';
import Hello from 'components/Hello';
import HelloState from 'components/HelloState';
import { withTheme } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { css } from '@emotion/core'

const ccc = {
  message:"sample222",
  aaa:"bbb",
};

// console.log(ccc.aaa);


const Sample = ({ message }) => {
  return (<h1><div>aaa</div>{message}</h1>);
};


function Sample2(props) {
  console.log(props);
  return (<h1 css={css`
    background-color: ${props.color};
  `}><div>sample2</div>{props.message}</h1>);
}

function Sample3({ message }) {
  // console.log(message);
  return (<h1><div>sample2</div>{message}</h1>);
}


function Sample4({ prop }) {
  console.log(prop);
  return (<h1><div>sample4</div></h1>);
}


function Sample5({ prop }) {
  prop();
  return (<h1><div>sample4</div></h1>);
}

const Page = ({ theme }) => {

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <h1>Sample Firebase Project</h1>

        <Sample message='sample' />
        <Sample2 message='sample' aaa="hello=aaa" color="blue">aaa</Sample2>
        <Sample2 message='hi' aaa="hello=aaa" color="green">aaa</Sample2>
        <Sample3 message='sample' />

        <Sample4 prop={123} />

        <Sample4 prop={"123"} />
        <Sample4 prop="123" />
        <Sample4 prop={true} />
        <Sample4 prop={false} />
        <Sample5 prop={() => console.log("arrow function")} />

        <Sample5 prop={function() {
          console.log("normal function");
        }} />



        <Hello><span>Hello</span></Hello>
        <HelloState title='Count up sample' />

        <Button variant="contained" color="secondary">Hello button</Button>
        <CircularProgress />
      </main>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
