import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../app/store';
import UserList from './index'

const fakeData = { "data": { "users": [{ "ad": "Landen", "soyad": "Kuhlman", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg", "gorev": "Central Implementation Administrator", "id": "1", "puan": 0, "mail": "Andrew76@hotmail.com", "__typename": "User" }, { "ad": "Toby", "soyad": "Gibson", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/563.jpg", "gorev": "Chief Web Agent", "id": "2", "puan": 0, "mail": "Alvena88@hotmail.com", "__typename": "User" }, { "ad": "Omer", "soyad": "Erdman", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/768.jpg", "gorev": "Customer Branding Administrator", "id": "3", "puan": 0, "mail": "Hettie69@gmail.com", "__typename": "User" }, { "ad": "Dasia", "soyad": "Farrell", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/434.jpg", "gorev": "Corporate Program Executive", "id": "4", "puan": 0, "mail": "Marilou_Ebert36@gmail.com", "__typename": "User" }, { "ad": "Guiseppe", "soyad": "Spinka", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/895.jpg", "gorev": "Central Accounts Liaison", "id": "5", "puan": 0, "mail": "Louie_Cruickshank@gmail.com", "__typename": "User" }, { "ad": "Malinda", "soyad": "Maggio", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1172.jpg", "gorev": "Lead Communications Engineer", "id": "6", "puan": 0, "mail": "Cierra.Blick@hotmail.com", "__typename": "User" }, { "ad": "Chyna", "soyad": "Runte", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/561.jpg", "gorev": "Investor Identity Representative", "id": "7", "puan": 0, "mail": "Emma.Rogahn@gmail.com", "__typename": "User" }, { "ad": "Marques", "soyad": "Franey", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/137.jpg", "gorev": "Customer Data Manager", "id": "8", "puan": 0, "mail": "Joan17@yahoo.com", "__typename": "User" }, { "ad": "Tatyana", "soyad": "Jerde", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1006.jpg", "gorev": "Chief Tactics Producer", "id": "9", "puan": 0, "mail": "Donnell54@yahoo.com", "__typename": "User" }, { "ad": "Beryl", "soyad": "Herzog", "resim": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/19.jpg", "gorev": "International Marketing Technician", "id": "10", "puan": 0, "mail": "Thelma16@hotmail.com", "__typename": "User" }] } }

describe("User List Test", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <UserList users={fakeData.data.users} />
                </BrowserRouter>
            </Provider>
        );
    })

    test("Kullanıcılar Listelenmiş mi?", () => {

        const text = screen.getByText(/Landen Kuhlman/i);
        expect(text).toBeInTheDocument();
    })

    test("Puanlama butonu var mı?", () => {
        const button = screen.getAllByTestId("increment-button");
        expect(button[0]).toHaveTextContent("+")
    })
})