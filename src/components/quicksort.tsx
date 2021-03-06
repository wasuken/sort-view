import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Bar } from 'react-chartjs-2';


interface QuickSortState{
	list: number[]
}
interface QuickSortProps{
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

class QuickSort extends React.Component<QuickSortProps, QuickSortState>{
    constructor(props: QuickSortProps){
		super(props);
		this.state = {
			list: this.props.list
		}
		this.quicksort = this.quicksort.bind(this);
		this.quicksort(props.list);
	}
	wait(sec: number){
		return new Promise((resolve, reject) => {
			setTimeout(resolve, sec*1000);
		});
	};
	createData(list: number[]): any{
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
	async quicksort(list: number[]){

	}
	render(): JSX.Element {
		console.log(this.state.list);
		return (
				<div>
				<Bar
			data={this.createData(this.state.list)}
			width={100}
			height={50}
				/>
				</div>
		)
	}
}
export default QuickSort;
