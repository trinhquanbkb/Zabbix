import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

//dummy data
import { records as data } from "./dataDemo";
import TableTracking from "./TableTracking";
import { getInforAllHostApi } from "../../api/hosts";

interface IData {
	name: string;
	interface: string;
	availability: string;
	status: string;
	latestdata: string;
}

const columns = [
	{
		Header: "Name",
		accessor: "name",
		sort: false,
	},
	{
		Header: "Interface",
		accessor: "interface",
		sort: false,
	},
	{
		Header: "Availability",
		accessor: "availability",
		sort: false,
	},
	{
		Header: "Status",
		accessor: "status",
		sort: false,
	},
	{
		Header: "LatestData",
		accessor: "latestdata",
		sort: false,
	},
];
const sizePerPageList = [
	{
		text: "5",
		value: 5,
	},
	{
		text: "10",
		value: 10,
	},
	{
		text: "25",
		value: 25,
	},
	{
		text: "All",
		value: data.length,
	},
];

const TrackingList = () => {
	let data: IData[] = [];
	const getApi = async () => {
		const result: any = await getInforAllHostApi();
		console.log(result);
		data = result.map((item: any) => {
			return item;
		});
		console.log(data);
	};
	useEffect(() => {
		getApi();
	}, []);

	return (
		<>
			<Row className="mt-4">
				<Col>
					<Card>
						<Card.Body>
							<TableTracking
								columns={columns}
								data={data}
								pageSize={5}
								sizePerPageList={sizePerPageList}
								isSortable={true}
								pagination={true}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default TrackingList;
