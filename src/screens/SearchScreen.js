import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen({ navigation }) {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '€' || '€€' || '€€€'
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <Text>We have found {results.length} results</Text>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("€")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("€€")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("€€€")}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
