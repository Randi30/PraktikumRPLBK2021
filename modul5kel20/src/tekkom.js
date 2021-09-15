import React, {Component} from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent  from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AppBar  from "@material-ui/core/AppBar";
import createSpacing from "@material-ui/core/styles/createSpacing";

 export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tekkom: [],
            visible: false,
        };
    }

    handleButton = (alamat) => {
        alert("Alamat : " + alamat);
    }
    componentDidMount(){
        axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/users",
            Headers: {
                accept: "*/*",
            },
        })

            .then((data) => {
                console.log(data.data);
                this.setState({
                    tekkom: data.data,
                });
            });
            .catch((error) => {
                console.log(error);
            });

        
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
            <AppBar style={{ padding: "10px", marginBottom: "100px"}}>
                <Typography style={{ margin: "auto"}}>List Nama</Typography>
            </AppBar>

            <Grid container md={11} spacing={4} style={{marginTop: "50px", marginLeft: "10px"}}>
                {
                    this.state.tekkom.map((result, index) => {
                        return (
                            <Grid item key = {result.name} md={3} >
                                <Card>
                                    <CardActionArea onClick={() => this.handleButton(result.address.city)}>
                                        <CardContent style={{ backgroundColor: "Xcfe8fc"}}>
                                            <Typography>Name : {results.name}</Typography>
                                            <Typography>Username : {results.username}</Typography>
                                            <Typography>Email : {results.email}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
            </Grid>
            </div>
        );
    }


 }