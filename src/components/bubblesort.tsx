import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs-2';


interface BubbleSortState{
	list: number[]
}
interface BubbleSortProps{
	list: number[]
}
interface Dataset{
	label: string,
	backgroundColor: string,
	borderColor: string,
	borderWidth: number,
	hoverBackgroundColor: string,
	hoverBorderColor: string,
	data: number[]
}
interface BarChartData{
	labels: string[],
	datasets: Dataset[]
}

class BubbleSort extends React.Component<BubbleSortProps, BubbleSortState>{
    constructor(props: BubbleSortProps){
		super(props);
		this.state = {
			list: this.props.list
		}
		this.bubblesort = this.bubblesort.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.wait = this.wait.bind(this);
	}
	wait(sec: number){
		return new Promise((resolve, reject) => {
			setTimeout(resolve, sec*1000);
		});
	};
	handleClick(): void{
		this.bubblesort(this.state.list);
	}
	createData(list: number[]): BarChartData{
		return {
			labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			datasets: [
				{
					label: 'My sort data',
					backgroundColor: 'rgba(255,99,132,0.2)',
					borderColor: 'rgba(255,99,132,1)',
					borderWidth: 1,
					hoverBackgroundColor: 'rgba(255,99,132,0.4)',
					hoverBorderColor: 'rgba(255,99,132,1)',
					data: list
				}
			]
		}
	}
	async bubblesort(list: number[]){
		let result = JSON.parse(JSON.stringify(list));
		for(let i=0;i<result.length-2;i++){
			for(let j=0;j<result.length-1;j++){
				if(result[j] > result[j+1]){
					result[j]=[result[j+1],result[j+1]=result[j]][0];
					try {
						await this.wait(2);
						this.setState({
							list: JSON.parse(JSON.stringify(result))
						});
					} catch (err) {
						console.error(err);
					}
				}
			}
		}
		this.setState({
			list: JSON.parse(JSON.stringify(result))
		});
		alert("sorted");
	}
	render(): JSX.Element {
		return (
				<div>
				<Bar
			data={this.createData(this.state.list)}
			width={100}
			height={50}
				/>
				<button id="bubble-sort-click" onClick={this.handleClick}>Sort!</button>
				</div>
		)
	}
}
export default BubbleSort;
