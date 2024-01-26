import { fireEvent, render, screen } from "@testing-library/react";
import RestrauntMain from "../RestrauntMain";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { DarkModeProvider } from "../DarkModeContext";
import { act } from "react-dom/test-utils";
import { useRestrauntList } from "../../utils/useRestrauntList";
import { BrowserRouter } from "react-router-dom";

import ItemList from '../ItemList'
 
jest.mock('../../utils/useRestrauntList', () => ({
  useRestrauntList: jest.fn(() => ({
    searchList: [
      { info: { id: 1, name: 'Restaurant 1', avgRating: 4.5, cloudinaryImageId: 'image1' } },
      { info: { id: 2, name: 'Restaurant 2', avgRating: 3, cloudinaryImageId: 'image2' } },
      { info: { id: 3, name: 'Restaurant 3', avgRating: 4.1, cloudinaryImageId: 'image3' } },
      { info: { id: 4, name: 'Restaurant 4', avgRating: 3.9, cloudinaryImageId: 'image4' } }
      // Add more mock data as needed
    ],
    handleFilter: jest.fn(),
    handleSearch: jest.fn(),
    searchText: '',
    setSearchText: jest.fn(),
  })),
}));



test("Should rend Button in RestrauntMain", async () => {
  const mockData = { itemCards: [
  { card: { info: { id: 1, name: 'Item 1', price: 100, ratings: { aggregatedRating: { rating: 3 } } } } },
  { card: { info: { id: 2, name: 'Item 1', price: 200, ratings: { aggregatedRating: { rating: 4.5 } } } } },
  { card: { info: { id: 3, name: 'Item 1', price: 300, ratings: { aggregatedRating: { rating: 4.1 } } } } },
  { card: { info: { id: 4, name: 'Item 1', price: 400, ratings: { aggregatedRating: { rating: 3.9 } } } } }
] };
    await act(async ()=>
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <DarkModeProvider>
        <RestrauntMain />
        <ItemList data={mockData}/>
      </DarkModeProvider>
    </Provider>
    </BrowserRouter>
  ))
  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();

  const topRatedButton = screen.getByTestId('top-rated')

  fireEvent.click(topRatedButton)
  const items = screen.getAllByTestId('item-card')
  expect(items.length).toBe(2)





});
