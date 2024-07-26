import { useEffect, useState } from "react"
import style from "./style.module.css"

export const FacingLastClients = () => {
    const [loadingContent, setLoadingContent] = useState(true);
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const dataFetching = async () => {
            try {
                const response = await fetch('http://becodecogip2.sysadminhell.com/contacts/all');
                const data = await response.json();
                data.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });
                
                const finalData = data.slice(0,5);
                setDataList(finalData);

                setLoadingContent(false);
            
            } catch (error) {
                
            };
        };

        dataFetching();
    }, []);

    return (
            <div className={style.companiesContainer}>
                <h2>Last Clients</h2>
                {dataList.length > 0 && <table>
                    <thead>
                        <tr>
                            <th className={style.headName}>Name</th>
                            <th className={style.headTVA}>Phone</th>
                            <th className={style.headCountry}>Mail</th>
                            <th className={style.headType}>Company</th>
                            <th className={style.headCreated}>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList.map((client) => {
                            return (<tr key={client.contact_id}>
                                <td>{client.name}</td>
                                <td>{client.phone}</td>
                                <td>{client.email}</td>
                                <td>{client.company_name}</td>
                                <td>{client.created_at}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>}
                <div className={style.spinnerContainer}>
                    {loadingContent && <svg className={style.spinner} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="3" r="0"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(45 16 16)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(90 16 16)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(135 16 16)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(180 16 16)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(225 16 16)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(270 16 16)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(315 16 16)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(180 16 16)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle></svg>}
            </div>
        </div>
    )
};