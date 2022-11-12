import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { ProductNavLink, PnavLabelContainer, PNavLabel, PArrowContainer } from './ProductNav';
import { ArrowForwardIos } from '@material-ui/icons';

const PDropdown = styled.div`
    height: 250px;
    background-color: white;
    transition: height 0.3s;
    transform-origin: center top;
    padding: 10px;
    margin: 10px 0;
    white-space: nowrap;
    font-size: 12px;
`;

const ProductTreeItem = styled.div`
   padding: 8px;
   background-color: white;
   color: black;
   font-size: 16px;
`;

const PTreeChild = styled.div`
   padding: 8px;
   background-color: white;
   color: black;
   font-size: 16px;
   height: 150%;
`;



const TreeItem = ({ onSelectCallback, label, children, link }) => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <ProductTreeItem>
        {link && (<ProductNavLink to={link} onClick={onSelectCallback}> {label} </ProductNavLink>)}
        {!link && (
        <PnavLabelContainer onClick={() => setIsOpen((p) =>!p)}>
        <PNavLabel isOpen={isOpen}>{label}</PNavLabel>
        <PArrowContainer  isOpen={isOpen}>
                <ArrowForwardIos style={{ display: "block", marginLeft: "8px", fontSize: "small" }} />
            </PArrowContainer>
        </PnavLabelContainer>
    )}
            {children && isOpen && <PTreeChild>{children}</PTreeChild> }
        </ProductTreeItem >
    );

};

const Dropdown = ({ tree, onSelectCallback }) => {
    const createTree = (branch) => (
        <TreeItem onSelectCallback={onSelectCallback} label={branch.label} link={branch.link}>
            {branch?.branches?.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
        </TreeItem>
    );

    console.log(tree);

    return (
        <PDropdown>
            {tree.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
        </PDropdown>
    );
};

export default Dropdown;