import { useEffect, useState } from "react";
import "./App.css";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { useQuery } from "@tanstack/react-query";

import { api } from "@/lib/api";

async function getTotalSpent() {
	const res = await api.expenses["total-spent"].$get();
	if (!res.ok) {
		throw new Error("server error");
	}
	const data = await res.json();
	return data;
}

function App() {
	const { isPending, error, data, isFetching } = useQuery({
		queryKey: ["get-total-spent"],
		queryFn: getTotalSpent,
	});

	if (isPending) return "Loading...";
	if (error) return "An error has occureed: " + error.message;
}

export default App;
