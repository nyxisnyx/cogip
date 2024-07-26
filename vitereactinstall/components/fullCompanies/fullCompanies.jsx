import { useEffect, useState } from "react"
import style from "./style.module.css"

export const FullCompanies = () => {
    const [loadingContent, setLoadingContent] = useState(true);
    const [dataList, setDataList] = useState([]);
    const [pagination, setPagination] = useState(1);
    const [maxPages, setMaxPages] = useState(1);

    useEffect(() => {
        const dataFetching = async () => {
            try {
                const response = await fetch(`http://becodecogip2.rbarkersw.com/companies/all/10/${pagination}`);
                const data = await response.json();
                data.params.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });
                
                setDataList(data.params);

                setMaxPages(data.pages);

                setLoadingContent(false);
            
            } catch (error) {
                
            };
        };

        dataFetching();
    }, [pagination]);

    const handleIncrease = () => {
        setPagination(pagination + 1 > maxPages? maxPages : pagination + 1);
    };

    const handleDecrease = () => {
        setPagination(pagination - 1 <= 0 ? 1 : pagination - 1);
    };

    return (
            <div className={style.companiesContainer}>
                <h2>All Companies</h2>
                {dataList.length > 0 && <>
                    <table>
                        <thead>
                            <tr>
                                <th className={style.headName}>Name</th>
                                <th className={style.headTVA}>TVA</th>
                                <th className={style.headCountry}>Country</th>
                                <th className={style.headType}>Type</th>
                                <th className={style.headCreated}>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList.map((company) => {
                                return (<tr key={company.id}>
                                    <td>{company.name}</td>
                                    <td>{company.tva}</td>
                                    <td>{company.country}</td>
                                    <td>{company.typeName}</td>
                                    <td>{company.created_at}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <div><button onClick={handleDecrease}>Previous</button>
                    <div>Page {pagination}</div>
                    <button onClick={handleIncrease}>Next</button></div>
                </>}
                <div className={style.spinnerContainer}>
                    {loadingContent && <svg className={style.spinner} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="3" r="0"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(45 16 16)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(90 16 16)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(135 16 16)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(180 16 16)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(225 16 16)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(270 16 16)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(315 16 16)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle><circle cx="16" cy="3" r="0" transform="rotate(180 16 16)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;3;0;0"/></circle></svg>}
            </div>
        </div>
    )
};