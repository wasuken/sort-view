import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import QuickSort from './components/quicksort';
import BubbleSort from './components/bubblesort';
import InsertionSort from './components/insertionsort';

interface AppState{
	list: number[]
}

class App extends React.Component<any, AppState>{
    constructor(props: any){
		super(props);
        this.handleChange = this.handleChange.bind(this);
		this.reset();
	}
	reset(){
		let list = [];
		for(let i=0;i<10;i++){
			list.push(Math.floor(Math.random() * 100));
		}
		this.state = {
			list: JSON.parse(JSON.stringify(list))
		}
	}
    handleChange(e: React.FormEvent): void{
		this.reset();
		let sortdiv: HTMLInputElement = document.getElementById("sort") as HTMLInputElement;
		switch((e.target as any).value){
			case "0":
				ReactDOM.render(<InsertionSort list={this.state.list}></InsertionSort>, sortdiv);
				break;
			case "1":
				ReactDOM.render(<BubbleSort list={this.state.list} />, sortdiv);
				break;
			default:
				break;
		}
    }
	render(): JSX.Element{
		return (
				<div>
				変更前:<br />{this.state.list.map((v)=>v+",")}<br />
			      <select onChange={ e => this.handleChange(e) }>
                    <option value="0">挿入ソート</option>
                    <option value="1">バブルソート</option>
                  </select>
				  <div ref="sort" id="sort"></div>
				</div>
		)
	}
}

export default App;
