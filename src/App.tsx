import React from 'react';
import logo from './logo.svg';
import './App.css';

import QuickSort from './components/quicksort'

interface AppState{

}

class App extends React.Component<any, AppState>{
    constructor(props: any){
		super(props);
	}
	render(): JSX.Element{
		let list = [];
		for(let i=0;i<100;i++){
			list.push(Math.floor(Math.random() * 100));
		}
		return(
				<div>
				変更前:<br />{list.map((v)=>v+",")}
			    変更後:<QuickSort list={list} />
				</div>
		)
	}
}

export default App;
