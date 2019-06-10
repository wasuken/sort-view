import React from 'react';
import logo from './logo.svg';
import './App.css';

import QuickSort from './components/quicksort'
import BubbleSort from './components/bubblesort'

interface AppState{

}

class App extends React.Component<any, AppState>{
    constructor(props: any){
		super(props);
	}
	render(): JSX.Element{
		let list = [];
		for(let i=0;i<10;i++){
			list.push(Math.floor(Math.random() * 100));
		}
		return(
				<div>
				変更前:<br />{list.map((v)=>v+",")}<br />
			    変更後:<BubbleSort list={list} />
				</div>
		)
	}
}

export default App;
