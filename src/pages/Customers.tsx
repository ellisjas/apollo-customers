import { useQuery } from "@apollo/client";
import React from "react";
import { ZellerCustomers } from "../API";
import { ListZellerCustomers } from "../queries";

const Customers: React.FC = () => {
  const { data, loading, error } = useQuery(ListZellerCustomers);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error!</h1>;

  return (
    <div>
      <h1>Customers</h1>
      {data.listZellerCustomers.items.map((customer: ZellerCustomers) => {
        return (
          <div key={customer.id}>
            <h3>{customer.name}</h3>
            <p>{customer.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Customers;
