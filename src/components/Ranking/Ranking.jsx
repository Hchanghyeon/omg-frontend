import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CustomTableContainer, CustomTableCell } from './Ranking.style';
import Paper from '@mui/material/Paper';
import { formatDateYearMonthDay } from "src/utils/DateChange";
import { RankingContainer, RankingHeader, RankingRefreshTimer, RankingSubHeader } from './Ranking.style';

export const RankingTable = ({rank, timer}) => {
    return (
        <RankingContainer>
            <RankingHeader>
                실시간 캐릭터 조회 일일 랭킹
            </RankingHeader>
            <RankingSubHeader>
                {formatDateYearMonthDay(new Date())} 기준
            </RankingSubHeader>
            <CustomTableContainer className="table-container" component={Paper}>
                <Table sx={{ minWidth: 380 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <CustomTableCell className="table-cell-table" align="center">순위</CustomTableCell>
                            {rank[0].worldName && <CustomTableCell className="table-cell-table" align="center">월드명</CustomTableCell>}
                            <CustomTableCell className="table-cell-table" align="center">캐릭터명</CustomTableCell>
                            <CustomTableCell className="table-cell-table" align="center">조회수</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rank.map((game, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className="table-cell-table" align="center" component="th" scope="row">
                                    <b>{index + 1}</b>
                                </TableCell>
                                { game.worldName && <TableCell className="table-cell-table" align="center" component="th" scope="row">
                                    {game.worldName}
                                </TableCell>
                                }
                                <TableCell className="table-cell-table" align="center">{game.characterName}</TableCell>
                                <TableCell className="table-cell-table" align="center"><b>{game.count}</b></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CustomTableContainer>
            <RankingRefreshTimer>
                갱신까지 남은 시간 {timer}초
            </RankingRefreshTimer>
        </RankingContainer>
    );
}
