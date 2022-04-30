import { Avatar, Card, CardContent, Grid } from "@mui/material";
import {userPageMock} from "../mocks/user";
import BookInList from "./bookInList";
import BookList from "./bookList";
import UserInfo from "./userInfo";

export default function UserBody()
{
    return (
        <div className="mainBody">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <UserInfo/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card variant="outlined">
                        <CardContent>
                            <h3>Purchased Books:</h3>
                            <BookList/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}